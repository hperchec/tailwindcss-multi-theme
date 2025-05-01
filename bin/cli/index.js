#!/usr/bin/env node

'use strict'

import cli from './cli.js'

const argv = CLI.helpers.hideBin(process.argv)

cli().parse(argv)
