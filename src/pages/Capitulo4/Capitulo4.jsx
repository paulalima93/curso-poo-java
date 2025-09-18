import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo4.css";

function Capitulo4() {
  const questions = [
    {
      question: "Uma classe que herda de outra é chamada de:",
      options: ["classe filha", "classe pai", "classe abstrata"],
      correct: "classe filha",
    },
    {
      question: "Qual palavra-chave é usada para chamar o construtor da classe pai?",
      options: ["super", "this", "extends"],
      correct: "super",
    },
    {
      question: "Polimorfismo permite que um mesmo método:",
      options: ["tenha diferentes comportamentos", "tenha sempre o mesmo comportamento", "não seja usado"],
      correct: "tenha diferentes comportamentos",
    },
    {
      question: "Qual é a diferença entre sobrecarga e sobrescrita de métodos?",
      options: ["Sobrecarga = mesmo nome, diferentes parâmetros; Sobrescrita = redefinição do método na subclasse", "Sobrecarga = redefinição; Sobrescrita = parâmetros diferentes", "Não há diferença"],
      correct: "Sobrecarga = mesmo nome, diferentes parâmetros; Sobrescrita = redefinição do método na subclasse",
    }
  ];

  return (
    <div className="page capitulo4">
      <h1>Capítulo 4: Herança e Polimorfismo</h1>

      <section>
        <h2>O que é Herança?</h2>
        <p>
          A <strong>herança</strong> permite que uma classe <em>filha</em> reutilize atributos e métodos de uma classe <em>pai</em>.
        </p>
        <p>
          Isso ajuda a reduzir repetição de código e facilita manutenção.
        </p>
      </section>

      <section>
        <h2>Exemplo em Java - Herança</h2>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Classe pai
public class Animal {
    public void comer() {
        System.out.println("O animal está comendo");
    }
}

// Classe filha
public class Cachorro extends Animal {
    public void latir() {
        System.out.println("O cachorro está latindo");
    }
}

// Testando
Cachorro dog = new Cachorro();
dog.comer(); // Herdado da classe Animal
dog.latir(); // Específico da classe Cachorro`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Polimorfismo</h2>
        <p>
          O <strong>polimorfismo</strong> permite que métodos tenham comportamentos diferentes dependendo do objeto que os chama.
        </p>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Classe pai
public class Animal {
    public void emitirSom() {
        System.out.println("Som genérico");
    }
}

// Classe filha
public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Au Au!");
    }
}

public class Gato extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Miau!");
    }
}

// Testando
Animal a1 = new Cachorro();
Animal a2 = new Gato();
a1.emitirSom(); // Au Au!
a2.emitirSom(); // Miau!`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie uma classe <strong>Funcionario</strong> com atributos nome e salario. Depois crie uma classe <strong>Gerente</strong> que herda de Funcionario e adiciona atributo departamento.
          </li>
          <li>
            Crie uma classe <strong>FormaGeometrica</strong> com método <em>calcularArea()</em>. Depois crie classes <strong>Quadrado</strong> e <strong>Circulo</strong> que sobrescrevem o método para calcular a área correta.
          </li>
          <li>
            Explique com suas palavras o que é polimorfismo.
          </li>
        </ol>
      </section>

      <section>
        <h2>Quiz - Teste seus conhecimentos</h2>
        <Quiz questions={questions} />
      </section>
    </div>
  );
}

export default Capitulo4;
