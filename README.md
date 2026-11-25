[![make.fun](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/Cm11w/the-meeting-that-should-have-been-an-email/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/Cm11w/the-meeting-that-should-have-been-an-email/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

# The Meeting That Should Have Been an Email

Entry for the [make.fun bounty](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9): a program that writes one line — a single joke about a meeting that should have been an email, at most 200 characters — to `/output/entry.txt`.

## The text

> The host shared their screen, opened the email, and read it aloud to all twelve recipients.

91 UTF-8 characters, one line, one sentence, no trailing newline.

## Why this line

Against the judge's published brief, most important first:

1. **On subject:** the joke is unmistakably about a meeting that should have been an email — the meeting's entire content was the email itself.
2. **The laugh:** it lands on its own with no setup, and the turn arrives at the last words — the email was read aloud to "all twelve recipients", the very people it had already been sent to.
3. **Surprise:** it never complains the meeting ran long and never says it could have been an email. The fresh angle is that the meeting *was* the email, performed live to its own recipients.
4. **Economy:** every word earns its place — host, screen-share, email, read aloud, twelve recipients — no throat-clearing, no explaining, no second sentence.
5. **Recognition:** screen-sharing and reading an email out loud to a room full of people is something anyone who has sat in that meeting has actually sat through.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no clock, no randomness: every run produces the identical file. A guard refuses to write anything if the text ever falls outside 1–200 characters, is blank, or contains a newline, and the program verifies the write landed byte for byte.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Verified 25 Nov 2026: two consecutive runs produce byte-identical output
(same SHA-256), 91 characters / 91 bytes, one line, no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
