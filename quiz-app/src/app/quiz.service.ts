import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions = [
    {
      question: 'What is MongoDB?',
      options: [
        'A NoSQL database',
        'A relational database',
        'A programming language',
        'A framework',
      ],
      answer: 'A NoSQL database',
    },
    {
      question: 'What is the primary data model used by MongoDB?',
      options: ['Document-oriented', 'Tabular', 'Graph', 'Key-Value'],
      answer: 'Document-oriented',
    },
    {
      question: 'What is the purpose of BSON in MongoDB?',
      options: [
        'A query language',
        'Binary representation of JSON',
        'A data storage engine',
        'A server-side scripting language',
      ],
      answer: 'Binary representation of JSON',
    },
    {
      question: 'How does MongoDB handle data consistency by default?',
      options: [
        'Strong consistency',
        'Eventual consistency',
        'Immediate consistency',
        'No consistency',
      ],
      answer: 'Eventual consistency',
    },
    {
      question: 'What is a "collection" in MongoDB?',
      options: [
        'A group of related documents',
        'A subset of a database',
        'A data type',
        'A JavaScript function',
      ],
      answer: 'A group of related documents',
    },
    {
      question: 'What is Express in the context of web development?',
      options: [
        'A database management system',
        'A web server',
        'A front-end framework',
        'A programming language',
      ],
      answer: 'A web server',
    },
    {
      question: 'What does the term "middleware" refer to in Express.js?',
      options: [
        'A database schema',
        'A routing endpoint',
        'Functions that handle requests and responses',
        'A front-end layout framework',
      ],
      answer: 'Functions that handle requests and responses',
    },
    {
      question:
        'In Express, how can you set up a route that handles both GET and POST requests?',
      options: ['app.route()', 'app.getpost()', 'app.all()', 'app.methods()'],
      answer: 'app.all()',
    },
    {
      question: 'What is the purpose of the Express application generator?',
      options: [
        'To generate documentation',
        'To create an Express application template',
        'To automate testing',
        'To optimize database queries',
      ],
      answer: 'To create an Express application template',
    },
    {
      question:
        'What is the primary programming language used to develop with Express?',
      options: ['Python', 'JavaScript', 'Ruby', 'Java'],
      answer: 'JavaScript',
    },
    {
      question: 'What is Angular in the context of web development?',
      options: [
        'A back-end server',
        'A front-end framework',
        'A database management system',
        'A version control system',
      ],
      answer: 'A front-end framework',
    },
    {
      question:
        'Which version of Angular introduced the component-based architecture?',
      options: ['Angular 1', 'Angular 2', 'Angular 4', 'Angular 5'],
      answer: 'Angular 2',
    },
    {
      question: 'What is a component in Angular?',
      options: [
        'A server-side script',
        'A reusable UI element',
        'A database table',
        'A routing configuration',
      ],
      answer: 'A reusable UI element',
    },
    {
      question: 'What does Angular CLI stand for?',
      options: [
        'Command Line Interface',
        'Client Language Integration',
        'Component Layout Inspector',
        'Angular Code Library',
      ],
      answer: 'Command Line Interface',
    },
    {
      question:
        'How does Angular handle data binding between components and views?',
      options: [
        'One-way data binding',
        'Two-way data binding',
        'Three-way data binding',
        'No data binding',
      ],
      answer: 'Two-way data binding',
    },
    {
      question: 'What is Node.js?',
      options: [
        'A front-end framework',
        'A runtime environment for JavaScript',
        'A database management system',
        'A version control system',
      ],
      answer: 'A runtime environment for JavaScript',
    },
    {
      question:
        'In Node.js, what is the primary use of the "require" function?',
      options: [
        'To import modules',
        'To create a new variable',
        'To define a function',
        'To handle HTTP requests',
      ],
      answer: 'To import modules',
    },
    {
      question:
        'What is the event-driven, non-blocking I/O model used by Node.js?',
      options: [
        'Synchronous I/O',
        'Multithreading',
        'Asynchronous I/O',
        'Sequential I/O',
      ],
      answer: 'Asynchronous I/O',
    },
    {
      question:
        'Which package manager is commonly used with Node.js to manage dependencies?',
      options: ['NPM', 'Bower', 'Yarn', 'Composer'],
      answer: 'NPM',
    },
    {
      question: 'What is the primary application type for Node.js?',
      options: [
        'Web development',
        'Mobile app development',
        'Desktop applications',
        'Data analysis',
      ],
      answer: 'Web development',
    },
    {
      question: 'What is Bootstrap in the context of web development?',
      options: [
        'A back-end framework',
        'A front-end framework',
        'A database management system',
        'A version control system',
      ],
      answer: 'A front-end framework',
    },
    {
      question: 'Who developed Bootstrap?',
      options: ['Facebook', 'Google', 'Twitter', 'Microsoft'],
      answer: 'Twitter',
    },
    {
      question: 'What is the purpose of the Bootstrap grid system?',
      options: [
        'To manage databases',
        'To handle server-side scripting',
        'To create responsive layouts',
        'To generate documentation',
      ],
      answer: 'To create responsive layouts',
    },
    {
      question:
        'What CSS preprocessor is commonly used in Bootstrap development?',
      options: ['Sass', 'Less', 'Stylus', 'SCSS'],
      answer: 'Sass',
    },
    {
      question:
        'What is the primary benefit of using Bootstrap for web development?',
      options: [
        'Enhanced server performance',
        'Faster load times',
        'Responsive and mobile-friendly design',
        'Built-in database management',
      ],
      answer: 'Responsive and mobile-friendly design',
    },
  ];

  userAnswers: string[] = Array(this.questions.length).fill('');

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  submitAnswer(questionIndex: number, answer: string) {
    this.userAnswers[questionIndex] = answer;
  }

  calculateScore(): number {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].answer) {
        score++;
      }
    }
    return score;
  }
}
