#!/usr/bin/env node

import chalk from 'chalk'
import boxen from 'boxen'
import { writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green'
}

const banner = readFileSync('banner.txt').toString()
const links = `${chalk.green('https://twitter.com/MarcoPiraccini')}
${chalk.green('https://github.com/marcopiraccini')}`

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// const [, ...trimmed] = output.split('\n')
const card = chalk.green(boxen(banner + links, options))
writeFileSync(join(__dirname, 'bin/output'), card)
console.log(card)
