import { SubjectCardComponent } from "../components/syllabus/subject-card/subject-card.component";

export interface SubjectCard {
  component: any;
  input: {
    title: string;
    content: Array<string>;
  }
}

export const subjectCardsArray: Array<SubjectCard> = [
  {
    component: SubjectCardComponent,
    input: {
      title: 'Angular',
      content: [
        'Definizione di Angular',
        'Framework vs Library',
        'Package Management',
        'Angular CLI',
        'Applicazione SPA',
        'Compilazione AOT e JIT',
        'Configurazioni (angular.json) e environments'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Componenti',
      content: [
        'Definizione di Componente',
        'Decoratore @Component',
        'Lifecycle',
        'View Encapsulation',
        'ViewChild & ViewChildren',
        'Content Projection',
        'Componenti Dinamici',
        'Standalone vs NgModule'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Template',
      content: [
        'Text Interpolation',
        'Property, Attribute, Class & Style Binding',
        'Event Binding',
        'Two-way Binding (banana-in-a-box)',
        'Pipe',
        'Template Reference Variable'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Direttive',
      content: [
        'Direttive Built-In',
        'Attributive',
        'Strutturali',
        'Custom',
        'Control Flow'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Servizi',
      content: [
        'Casi d\'Uso: Http Client, Facade, Data Management, ...',
        'Decoratore @Injectable',
        'Design Pattern Dependency Injection',
        'Design Pattern Singleton',
        'Root, Module, Component Scope'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Routing',
      content: [
        'Gestione di cambio rotta (template, component, ...)',
        'Passaggio di dati, parametri',
        'Guardie, Resolver',
        'Lazy Loading'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Http Client',
      content: [
        'Protocollo Http',
        'Metodi CRUD',
        'Gestione di Richieste e Risposte',
        'Interceptors',
        'Pattern Observable',
        'RxJS: Observable, Observer, Subject'
      ]
    }
  },
  {
    component: SubjectCardComponent,
    input: {
      title: 'Form',
      content: [
        'Template Driven vs Reactive Forms',
        'Form Control, Form Group, Form Array',
        'Nested Forms',
        'Dynamic Forms',
        'Validators'
      ]
    }
  }
];