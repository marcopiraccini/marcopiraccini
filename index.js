#!/usr/bin/env node

import { readFileSync } from 'fs'
import { join } from 'path'
try {
  const output = readFileSync(join(__dirname, 'bin/output'), 'utf8')
  console.log(output)
} catch (err) {
  console.log('no output file found')
}
