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
  borderColor: 'green',
  backgroundColor: 'black'
}

const banner = chalk.bgBlack(readFileSync('banner.txt').toString())
const links = `${chalk.blue.bgBlack('marco.piraccini@gmail.com'.padEnd(59, ' '))}
${chalk.blue.bgBlack('https://twitter.com/MarcoPiraccini'.padEnd(59, ' '))}
${chalk.blue.bgBlack('https://fosstodon.org/@marcopiraccini'.padEnd(59, ' '))}
${chalk.blue.bgBlack('https://github.com/marcopiraccini'.padEnd(59, ' '))}`

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const card = chalk.green(boxen(banner + links, options))

writeFileSync(join(__dirname, 'bin/output'), card)
console.log(card)
