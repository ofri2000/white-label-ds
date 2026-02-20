# White Label Design System

A production-grade React + TypeScript component library built from the [White-Label-DS-2](https://www.figma.com/design/qQbUMp0XfjGS68HI2TRfE5/White-Label-DS-2) Figma design file. Every component maps 1:1 to a Figma component and uses only the centralized design tokens.

## Components

| Category | Components |
|---|---|
| **Actions** | `Button`, `IconButton`, `Link` |
| **Inputs** | `TextInput`, `TextArea`, `Dropdown`, `Checkbox`, `RadioButton`, `Toggle` |
| **Data Display** | `Badge`, `Chip`, `Tag`, `Tooltip`, `Card` |
| **Feedback** | `Spinner`, `Skeleton`, `ProgressIndicator`, `Toast`, `Notification` |
| **Navigation** | `Tabs`, `Breadcrumbs`, `Accordion` |
| **Overlays** | `Modal` |

## Quick Start

```bash
npm install white-label-ds
```

Import the CSS variables at your app root:

```tsx
import 'white-label-ds/dist/styles/variables.css';
```

Use components:

```tsx
import { Button, TextInput, Toggle, Badge } from 'white-label-ds';

function App() {
  return (
    <>
      <Button variant="Primary" size="Medium">Save</Button>
      <Button variant="Secondary" size="Small">Cancel</Button>
      <Button variant="Red">Delete</Button>
      <Button variant="Green">Confirm</Button>
      <Button variant="Ghost">More…</Button>

      <TextInput placeholder="Enter value" />
      <TextInput error errorText="Required field" />

      <Toggle label="Dark mode" />

      <Badge color="Blue">12</Badge>
    </>
  );
}
```

## Design Tokens

All styling uses CSS custom properties from `variables.css`, which map directly to the Figma design tokens in `design-tokens.ts`:

- **Colors**: `--fill-*`, `--border-*`, `--content-*`, `--bg-*`
- **Spacing**: `--space-3xs` (4px) → `--space-5xl` (128px)
- **Sizing**: `--size-3xs` (16px) → `--size-2xl` (80px)
- **Radius**: `--radius-s` (4px) → `--radius-full` (1000px)
- **Typography**: `--font-size-*`, `--line-height-*`, `--font-weight-*`
- **Shadows**: `--shadow-1` → `--shadow-5`

## Development

```bash
npm install
npm run dev          # Watch mode build
npm run storybook    # Component playground
npm run typecheck    # TypeScript check
npm run build        # Production build
npm test             # Run tests
```

## Project Structure

```
src/
├── components/       # All UI components (TSX + CSS)
│   ├── Button/
│   ├── TextInput/
│   ├── Checkbox/
│   ├── ...
├── tokens/           # design-tokens.ts (from Figma)
├── styles/           # variables.css (CSS custom properties)
├── types/            # Shared TypeScript types
├── utils/            # Utility functions (cx)
└── index.ts          # Barrel export
```

## Figma Source

Components are pixel-matched to the Figma file:
**[White-Label-DS-2](https://www.figma.com/design/qQbUMp0XfjGS68HI2TRfE5/White-Label-DS-2?node-id=8529-0)**

## License

MIT
