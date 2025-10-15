# WSDOT ArcGIS Online Thumbnail Generation

The `thumbnail.svg` is a template for the creation of a WSDOT standard thumbnail for use with an ArcGIS Online item.

## Prerequisites

- [Inkscape]

  You can use whatever SVG editing program you want, but the steps here will be using [Inkscape].

## Creating a thumbnail

🚧⚠️ This section is a work-in-progress. ⚠️🚧

1. Create a copy of `thumbnail.svg` and name it.
2. Open your copy in [Inkscape].
3. Decide if your project is one of the following, then hide the corresponding `text` elements that do not apply.
   - `demo`
   - `draft`
   - `temporary`
   - `deprecated`
   - `restricted-access`
4. Modify the `item-name` and `item-type` text elements.
5. Add a background thumbnail image.
6. Export the image to PNG.
7. If you haven't already, save your SVG for later use.

## Standard item types

| type | description                 |
| ---- | --------------------------- |
| svc  | map, feature, etc., service |
| map  | Web Map                     |
| app  | Application                 |
| misc | Misc.                       |
| doc  | Document                    |
| PDF  | PDF                         |

[Inkscape]: https://inkscape.org/
