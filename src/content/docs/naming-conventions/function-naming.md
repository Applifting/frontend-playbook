---
title: Function Naming
description: 'Naming functions with the A/HC/LC pattern: action + high context + low context for clarity.'
sidebar:
  order: 3.3
lastUpdated: 2025-12-03
---

_Borrowed from [kettanaito's naming cheatsheet](https://github.com/kettanaito/naming-cheatsheet)_ and slightly enhanced.

- Use the **A/HC/LC** pattern

```
prefix? + action (A) + high context (HC) + low context? (LC)
```

| Name                   | Prefix   | Action (A) | High context (HC) | Low context (LC) |
| ---------------------- | -------- | ---------- | ----------------- | ---------------- |
| `getUser`              |          | `get`      | `User`            |                  |
| `getUserMessages`      |          | `get`      | `User`            | `Messages`       |
| `handleClickOutside`   |          | `handle`   | `Click`           | `Outside`        |
| `shouldDisplayMessage` | `should` | `Display`  | `Message`         |                  |

## Common actions

| Action      | Usage                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `get`       | Accesses data immediately (i.e. shorthand getter of internal data). Or async data - get a resource from the server. |
| `set`       | Set a variable or state to a new value.                                                                             |
| `reset`     | Sets a variable back to its initial value or state.                                                                 |
| `remove`    | Removes something _from_ somewhere. E.g. remove a filter from a collection of selected filters. (_opposite of add_) |
| `delete`    | Erase something. E.g. delete resource from a database. (_opposite of create_)                                       |
| `compose`   | Combine multiple functions or elements into one.                                                                    |
| `handle`    | Respond to an event or trigger, typically prefixed for event callbacks (e.g. `handleClick`).                        |
| `add`       | Include something in a collection or group.                                                                         |
| `create`    | Make a new resource, object, or data structure.                                                                     |
| `format`    | Convert data into a specific or human-readable format.                                                              |
| `update`    | Change an existing value, state, or record with new information.                                                    |
| `init`      | Perform initial setup or bootstrapping.                                                                             |
| `toggle`    | Flip between two states, usually boolean (e.g. show/hide, true/false).                                              |
| `validate`  | Ensure data meets required rules or structure.                                                                      |
| `transform` | Convert data from one shape, structure, or format to another.                                                       |
| `cancel`    | Abort an operation or undo a pending action.                                                                        |
