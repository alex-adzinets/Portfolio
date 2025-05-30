import { expect } from 'vitest';

import * as matchers from "@testing-library/jest-dom/matchers";

console.log('Available matchers:', matchers);

expect.extend(matchers);