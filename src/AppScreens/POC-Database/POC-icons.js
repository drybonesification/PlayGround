import React from 'react'
import {withBaseIcon} from 'react-icons-kit'
import { socialGithub } from 'react-icons-kit/icomoon'

const SideIconContainer = withBaseIcon({size:64, style:{color: "#FFFFFF"}})

export const Github = () => <SideIconContainer icon={socialGithub}/>