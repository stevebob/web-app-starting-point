import React from 'react';
import { Form, TextInput, InputListNil, FormBuilder } from './form';

export class User {
  private readonly name: string;
  private readonly age: number;
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const USER_FORM_BUILDER =
  new InputListNil()
  .cons('name', new TextInput("Name:"))
  .cons('age', new TextInput("Age:").map(parseInt))
  .map(({name, age}) => new User(name, age));

export class Hello extends React.Component {
  public render() {
    return <div className='example'>{USER_FORM_BUILDER.build('user').render()}</div>;
  }
}
