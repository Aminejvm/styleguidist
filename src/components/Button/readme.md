General use case

```jsx
<Button>Contact Our Customer Service</Button>
```

Minimal width use case

```jsx
<Button>Ok</Button>
```

Disabled Use Case

```jsx
<Button disabled> Submit </Button>
```

With Icon
<br/>
Note(Amine): If this use case getspopular, we can integrate it into internal button

```jsx
import { Stack, Box } from "../";

<Stack horizontal gap="1rem" alignItems="center" as={Button}>
  <Box width="20px" height="20px" backgroundColor="red" />
  <p>Click Here</p>
</Stack>;
```
