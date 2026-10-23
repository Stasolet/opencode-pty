// Diagnostic marker + TUI export for the host's auto-load convention:
// terminal widgets come from the plugin package's "./tui" export.
import { appendFileSync } from 'node:fs'
try {
  appendFileSync('/tmp/opencode/opencode-pty-wrapper.log', `${new Date().toISOString()} plugin-v2/tui.js imported\n`)
} catch (_) {
  /* never break the plugin for a marker */
}

export { default } from '../dist/src/tui/index.js'
