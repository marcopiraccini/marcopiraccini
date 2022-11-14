#!/usr/bin/env node

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

try {
  const output = readFileSync(join(__dirname, 'bin/output'), 'utf8')
  console.log(output)
} catch (err) {
  console.error(err)
  console.log('no output file found')
}
