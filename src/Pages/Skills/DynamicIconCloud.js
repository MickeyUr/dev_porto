import React from 'react'
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud'

import { siJavascript } from 'simple-icons';
import { siJson } from 'simple-icons';
import { siNextdotjs } from 'simple-icons';
import { siPhp } from 'simple-icons';
import { siPhpstorm } from 'simple-icons';
import { siPhpmyadmin } from 'simple-icons';
import { siLaravel } from 'simple-icons';
import { siGit } from 'simple-icons';
import { siGithub } from 'simple-icons';
import { siAwsorganizations } from 'simple-icons';
import { siDigitalocean } from 'simple-icons';
import { siReact } from 'simple-icons';
import { siHeroku } from 'simple-icons';
import { siHomebrew } from 'simple-icons';
import { siHtml5 } from 'simple-icons';
import { siCss3 } from 'simple-icons';
import { siBootstrap } from 'simple-icons';
import { siJquery } from 'simple-icons';
import { siTailwindcss } from 'simple-icons';
import { siMaterialdesign } from 'simple-icons';
import { siMysql } from 'simple-icons';
import { siMongodb } from 'simple-icons';
import { siAxios } from 'simple-icons';
import { siVite } from 'simple-icons';
import { siInertia } from 'simple-icons';
import { siCodeigniter } from 'simple-icons';


export const cloudProps= {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40
    }
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false
  }
}
// import js from "simple-icons/icons/javascript"
// import nextjs from "simple-icons/icons/nextdotjs"
const renderCustomIcon = (icon, bg) => {
  return renderSimpleIcon({
    icon,
    minContrastRatio: 2,
    bgHex: bg,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault()
    }
  })
}

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons(slugs).then(setIcons)}, [])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    }))
  }

  return <a>Loading</a>
}

const slugs = [
  'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'typescript',
  'vercel',
  'visualstudiocode'
]

const icons = [siCodeigniter, siInertia, siVite, siAxios, siMongodb, siMysql, siMaterialdesign, siTailwindcss, siJquery, siBootstrap, siCss3, siHtml5, siHomebrew, siHeroku, siReact, siPhpstorm, siPhpmyadmin, siJavascript, siJson,siNextdotjs, siLaravel, siPhp, siGithub, siAwsorganizations, siDigitalocean, ].map((icon) => {
  return renderCustomIcon(
    icon,"#080510")
})

const DynamicIconCloud = () => {
  // const icons = useIcons(slugs)
  // console.log(icons)
  return <Cloud {...cloudProps}>
    {icons}
  </Cloud>
}

export default DynamicIconCloud;