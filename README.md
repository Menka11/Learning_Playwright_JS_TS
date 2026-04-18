# Learning Playwright with JavaScript & TypeScript

A comprehensive learning repository covering JavaScript fundamentals, advanced concepts, Object-Oriented Programming, TypeScript, and Playwright automation testing.

## 📚 Project Overview

This repository is a hands-on learning journey that progresses from JavaScript basics to advanced TypeScript concepts, with practical Playwright end-to-end testing examples. It includes 22+ chapters with practical exercises, tasks, and real-world examples.

## 🏗️ Repository Structure

### JavaScript Fundamentals (Chapters 1-10)

- **Chapter_01_Basics** - JavaScript basics and initial setup
- **Chapter_02_JS_Concepts** - Variable declarations (var, let, const), hoisting, and scope
- **Chapter_03_identifier_Literal** - Identifiers and literal values
- **Chapter_04_Operators** - Arithmetic, assignment, comparison, logical, and typeof operators
- **Chapter_05_if_else_Statements** - Conditional statements with real-time examples and API integration
- **Chapter_06_Switch** - Switch statements with various patterns and real-world examples
- **Chapter_07_Loops** - For, while, and do-while loops with exercises and tasks
- **Chapter_08_Array** - Array creation, manipulation, searching, sorting, and destructuring
- **Chapter_09_Functions** - Function declarations, expressions, parameters, and tasks
- **Chapter_10_Strings** - String methods and manipulation

### Object-Oriented Programming (Chapters 11-17)

- **Chapter_11_Object** - Object creation, properties, methods, and manipulation
- **Chapter_12_MDA.js** - Multidimensional arrays
- **Chapter_13_callback** - Callback functions and patterns
- **Chapter_14_Promises** - Promise handling, resolve, reject, and chaining
- **Chapter_15_Async_Await** - Async-await syntax and error handling
- **Chapter_16_OOPs** - Object-Oriented Programming principles
- **Chapter_17_Inharitance** - Inheritance and prototypal chains

### TypeScript (Chapters 18-22)

- **Chapter_18_Typescript** - TypeScript basics and setup
- **Chapter-19_Typescript_interface** - Interfaces and type definitions
- **Chapter_20_Typescript_enum** - Enumerations and enum usage
- **Chapter_21_Typescript_Generics** - Generic types and constraints
- **Chapter_22_Typescript_PRIVATE_PUBLIC_PROTECTED** - Access modifiers and decorators

### Testing & Practice

- **EndToEndTests** - Playwright end-to-end test suites
- **specs** - Test specifications and test configurations
- **tests** - Test files and test runners
- **PW_JS_Test1_28_02_2026** - Mini test suite from Feb 2026
- **PW_JS_Test2_14_03_2026** - Advanced test suite from Mar 2026
- **JSPractice250question** - Practice questions covering 250+ interview questions

## 🛠️ Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Visual Studio Code** (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Menka11/Learning_Playwright_JS_TS.git
   cd Learning_Playwright_JS_TS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 🚀 Getting Started

### Running JavaScript Files

To run individual JavaScript chapter files:

```bash
node Chapter_01_Basics/basics_01.js
node Chapter_02_JS_Concepts/var.js
node Chapter_05_if_else_Statements/26_Statements.js
```

### Running TypeScript Files

Compile and run TypeScript files using ts-node:

```bash
npx ts-node Chapter_18_Typescript/filename.ts
```

### Running Playwright Tests

Run all tests:
```bash
npx playwright test
```

Run tests in a specific file:
```bash
npx playwright test tests/filename.spec.ts
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

Generate and view HTML test report:
```bash
npx playwright show-report
```

## 📋 Project Configuration

- **playwright.config.ts** - Playwright configuration with HTML reporter
- **tsconfig.json** - TypeScript compiler options
- **package.json** - Project dependencies and scripts

### Key Dependencies

- `@playwright/test` - Playwright testing framework
- `@playwright/mcp` - Playwright MCP integration
- `typescript` - TypeScript compiler
- `ts-node` - Run TypeScript files directly
- `playwright` - Core Playwright library

## 🎯 Learning Path

### Beginner Level
1. Start with Chapter 1-4 for JavaScript fundamentals
2. Learn control flow with Chapters 5-6 (if-else, switch)
3. Master loops and arrays (Chapters 7-8)

### Intermediate Level
4. Explore functions and strings (Chapters 9-10)
5. Learn objects and OOP principles (Chapters 11-12, 16-17)
6. Understand async programming (Chapters 13-15)

### Advanced Level
7. Master TypeScript (Chapters 18-22)
8. Practice with 250+ interview questions (JSPractice250question)
9. Build end-to-end tests with Playwright

## 📝 Tasks and Exercises

Each chapter includes practical tasks:

- **Grade Calculator** (Chapter 5)
- **FizzBuzz Test** (Chapter 5)
- **Triangle Classifier** (Chapter 6)
- **Leap Year Validator** (Chapter 6)
- Array manipulation tasks (Chapter 8)
- Function exercises (Chapter 9)
- And many more...

## 🧪 Testing with Playwright

The repository includes practical Playwright examples:

- **EndToEndTests** - Full end-to-end test scenarios
- **Test Suites** - Organized test specifications
- **HTML Reporting** - Detailed test reports with screenshots

### Example Test Run

```bash
# Run all tests with HTML report
npx playwright test

# Open the report
npx playwright show-report
```

## 📚 Learning Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Playwright Documentation](https://playwright.dev/)

## 💡 Tips for Learning

1. **Start with basics** - Begin with Chapter 1 and progress sequentially
2. **Practice actively** - Run all code examples and modify them
3. **Complete tasks** - Solve the provided tasks to reinforce learning
4. **Debug effectively** - Use browser dev tools and Playwright debug mode
5. **Review concepts** - Revisit earlier chapters when stuck on advanced topics

## 📊 Language Statistics

- **JavaScript** - 78.9%
- **TypeScript** - 21.1%

## 🤝 Contributing

This is a personal learning repository. Feel free to fork and customize for your learning journey!

## 📝 License

This repository is open source and available for educational purposes.

## 👤 Author

[Menka Patel](https://github.com/Menka11)

## 🔗 Links

- [GitHub Repository](https://github.com/Menka11/Learning_Playwright_JS_TS)
- [Playwright Official Documentation](https://playwright.dev/)

---

**Last Updated:** April 2026

Happy Learning! 🚀
