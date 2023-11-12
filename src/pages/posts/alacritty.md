---
layout: '@/templates/BasePost.astro'
title: Alacritty
description: Selecting a terminal emulator.
pubDate: 2023-11-11T02:34:45.000Z
imgSrc: '/assets/images/Alacritty.jpeg'
imgAlt: 'Alacritty'
---


## Terminal Emulator
A terminal emulator is essentially the application that you use to interact
with your machine.  Apple has a Terminal application that is pretty basic and 
there are better options out there.  My top choice recently has been alacritty
for a the following reasons:

1. Alacritty is crazy fast.  I noticed a difference immediately in my workflow
2. I use Tmux for all of my tab management, so I didn't need the feature(s) from iterm2
3. Much like Josh Medeski, I have been trying to move to a more minimal setup
4. Speaking of minimal, I really love that you can configure Alacritty with a single yaml file

### Alacritty config

`.config/alacritty/alacritty.yml`
```yaml
env:
  TERM: xterm-256color

window:
  decorations: buttonless #takes away the top bar
  opacity: 0.8 #love that see through look
  dynamic_padding: true
  padding:
    x: 5
    y: 5

font:
  normal:
    family: "SFMono Nerd Font"
    style: Medium
  italic:
    family: "SFMono Nerd Font"
    style: Medium Italic
  bold:
    family: "SFMono Nerd Font"
    style: Heavy
  bold_italic:
    family: "SFMono Nerd Font"
    style: Heavy Italic
  size: 13

  offset:
    x: 0
    y: 5

  glyph_offset:
    x: 0
    y: 2

  AppleFontSmoothing: true

selection:
  semantic_escape_chars: ",│`|:\"' ()[]{}<>\t"

  save_to_clipboard: true

live_config_reload: true

colors:
  primary:
    background: "#000000"
    foreground: "#ebdbb2"

  normal:
    black: "#282828"
    red: "#cc241d"
    green: "#98971a"
    yellow: "#d79921"
    blue: "#458588"
    magenta: "#b16286"
    cyan: "#689d6a"
    white: "#a89984"

  bright:
    black: "#928374"
    red: "#fb4934"
    green: "#b8bb26"
    yellow: "#fabd2f"
    blue: "#83a598"
    magenta: "#d3869b"
    cyan: "#8ec07c"
    white: "#ebdbb2"
```

### Other options
I used Iterm2 for quite a while and it was great.  It has
some native support for things like Tabs and Panes, so if 
you aren't using tmux, iterm could be a good option

I haven't had experience with it but Kitty is another
option that I see discussed frequently.
