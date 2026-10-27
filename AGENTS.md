<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site content (programs, achievers, FAQs, contact) lives in src/data/ace.ts; components only present it, so client edits touch one file.
- Shared header/footer are rendered in __root.tsx; page sections are reusable components under src/components/ace.
