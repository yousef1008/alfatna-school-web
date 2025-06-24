import { employees } from './employees';

const months_260 = ["9/2024", "10/2024", "11/2024", "12/2024"];
const months_290 = ["1/2025", "2/2025", "3/2025", "4/2025", "5/2025"];

export const salaries = employees.map(name => ({
  name,
  salaryHistory: [
    ...months_260.map(month => ({ month, amount: 260 })),
    ...months_290.map(month => ({ month, amount: 290 }))
  ]
}));