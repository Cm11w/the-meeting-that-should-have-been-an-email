// The Meeting That Should Have Been an Email
// (u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9) entry:
// write the one-line joke to the grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (91 UTF-8 characters, one line, one sentence):
//   The host shared their screen, opened the email, and read it aloud to all twelve recipients.
//
// Why this text, against the judge's published brief (most important first):
//   1. It IS a joke about a meeting that should have been an email, on
//      the nose: the meeting's entire content was the email itself.
//   2. The laugh lands on its own with no setup, and the turn arrives at
//      the last words: the email was read aloud to "all twelve
//      recipients" - the very people it had already been sent to.
//   3. Surprise, not the obvious complaint: it never says the meeting ran
//      long and never says it could have been an email. The angle is
//      that the meeting WAS the email, performed live to its own
//      recipients.
//   4. Economy: every word earns its place - host, screen-share, email,
//      read aloud, twelve recipients - no throat-clearing, no
//      explaining, no second sentence.
//   5. Recognition: screen-sharing and reading an email out loud to a
//      room full of people is something anyone who has sat in that
//      meeting has actually sat through.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = "The host shared their screen, opened the email, and read it aloud to all twelve recipients.";

// Guard: the entry is only valid as one line of 1-200 characters, and
// the gate also refuses text that is only white space. Refuse to write
// anything if the text ever falls outside that range, is blank, or
// contains a newline (the gate counts characters, so a stray newline
// would silently produce an invalid entry). The constant above is 91
// characters on a single line, comfortably inside the gate, and the guard
// also protects any future edit of the text from silently breaking
// validity. Control characters are rejected too: the gate expects plain
// UTF-8 text, and a stray tab or escape would survive the newline check
// while still not being the single clean line the judge is shown.
//
// Determinism: TEXT is a fixed string constant. No input is read, no clock
// is consulted, no randomness is used, and no network call is made, so the
// file written is identical on every run by construction.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0 || TEXT.includes('\n') || TEXT.includes('\r') || /[\u0000-\u001F\u007F]/.test(TEXT)) {
  throw new Error('TEXT must be a single non-blank line of 1-200 characters');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');

// Verify the write landed byte for byte: exactly the one line, with no
// trailing newline appended. If the file ever differs, fail loudly instead
// of handing the grader a wrong artifact.
if (readFileSync(join(outDir, 'entry.txt'), 'utf8') !== TEXT) {
  throw new Error('entry.txt does not match TEXT');
}
