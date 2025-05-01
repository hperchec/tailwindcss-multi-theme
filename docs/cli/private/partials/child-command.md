<%
  // Optional props
  if (hLevel === undefined) { hLevel = 3 }
  if (recursive === undefined) { recursive = true }
-%><%= $utils.h(hLevel, '`' + cmdDoclet.args.join(' ') + '`') %>

```
<%- $filters.stripAnsi(cmdDoclet.rawUsage) %>
```

<%
  if (recursive) { 
    for (const child in cmdDoclet.children) {
%>
<%-
      await include('child-command.md', {
        cmdDoclet: cmdDoclet.children[child],
        hLevel: hLevel + 1,
        recursive: true
      })
%>
<%
    }
  }
%>
