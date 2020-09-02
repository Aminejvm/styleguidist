```jsx static
import React from "react";
```

Vertical Stack

```jsx
import { Box, Button } from "../";
<Stack gap="1rem">
  <Box width={200} height={50} backgroundColor="red" />
  <Box width={200} height={300} backgroundColor="red" />
  <Button>Submit</Button>
</Stack>;
```

Horizontal Stack

```jsx
import { Box } from "../";
<Stack horizontal gap="2rem">
  <Box width={50} height={50} backgroundColor="red" />
  <Box width={200} height={50} backgroundColor="red" />
</Stack>;
```
