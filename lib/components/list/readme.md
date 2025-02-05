---
title: Lists
description: Variations on Material Design lists.
codepen: VwxBgeX
---

## Preview

<div class="preview">
  <ul class="list">
    <li class="list-tile">List Item</li>
    <li class="list-tile">
      <i class="leading material-icons">edit</i>
      <span class="title">Edit</span>
    </li>
    <li class="list-tile">
      <i class="leading material-icons">edit</i>
      <span class="title">Edit</span>
      <i class="trailing material-icons">delete</i>
    </li>
    <div class="divider"></div>
    <li class="list-tile">
      <i class="leading material-icons">info</i>
      <span class="title">Title</span>
      <i class="trailing material-icons">chevron_right</i>
    </li>
  </ul>
</div>

## Installation

To import just the component styles, copy the following into your project's **styles.css** file:

```css
/* Core Styles */
@import url('https://kherrick.github.io/material-design-lite/css/core.css');
/* Material Icons */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
/* Roboto Font */
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap');
/* Component Styles */
@import url('https://kherrick.github.io/material-design-lite/css/components/list/style.css');
@import url('https://kherrick.github.io/material-design-lite/css/components/list-tile/style.css');
```

## Usage

Start with a **div** element and add the **list** class name:

```html
<div class="list"></div>
```

## Variants

### Default

Default list tile styling.

<div class="preview">
  <div class="list">
    <li class="list-tile">List Item 1</li>
    <li class="list-tile">List Item 2</li>
  </div>
</div>

```html
<div class="list">
  <li class="list-tile">List Item 1</li>
  <li class="list-tile">List Item 2</li>
</div>
```

### Activatable

To make a list tile activatable, add the **activatable** class name:

<div class="preview">
  <div class="list activatable">
    <li class="list-tile">List Item 1</li>
    <li class="list-tile">List Item 2</li>
  </div>
</div>

```html
<div class="list activatable">
  <li class="list-tile">List Item 1</li>
  <li class="list-tile">List Item 2</li>
</div>
```

## Design Tokens

| Token                                | Description                 | Default                                                                                                   |
|--------------------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------|
| `--md-comp-list-container-min-width`  | The min width of the container  | `300px`                                                                                                    |

## Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
