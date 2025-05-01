# CLI

## Table of contents

<%#
  // Table of contents is automatically injected here by
  // [remark-toc](https://github.com/remarkjs/remark-toc)
-%>
## Usage

```console
<%- $filters.stripAnsi(rootDoclet.rawUsage) %>
```

## Commands

<% for (const child in rootDoclet.children) { %>
<%-
  await include('child-command.md', {
    cmdDoclet: rootDoclet.children[child],
    hLevel: 3,
    recursive: true
  })
%>
<% } %>
