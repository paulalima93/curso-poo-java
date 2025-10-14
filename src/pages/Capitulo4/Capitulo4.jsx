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
      options: [
        "Sobrecarga = mesmo nome, diferentes parâmetros; Sobrescrita = redefinição do método na subclasse",
        "Sobrecarga = redefinição; Sobrescrita = parâmetros diferentes",
        "Não há diferença"
      ],
      correct: "Sobrecarga = mesmo nome, diferentes parâmetros; Sobrescrita = redefinição do método na subclasse",
    }
  ];

  return (
    <div className="page capitulo4">
      <h1>Capítulo 4: Herança e Polimorfismo</h1>

      <section>
        <h2>O que é Herança?</h2>
        <p>
          A <strong>herança</strong> é um dos pilares da Programação Orientada a Objetos (POO) que permite que uma classe <em>filha</em> adquira atributos e métodos de uma classe <em>pai</em>. 
        </p>
        <p>
          Com herança, é possível <strong>reaproveitar código existente</strong>, evitando duplicação e facilitando manutenção. A classe filha pode ainda adicionar novos atributos ou métodos, ou modificar comportamentos herdados.
        </p>
        <p>
          Exemplo: em um sistema de animais, podemos ter uma classe genérica <em>Animal</em> com métodos como <code>comer()</code> e <code>dormir()</code>. Classes específicas, como <em>Cachorro</em> e <em>Gato</em>, podem herdar esses métodos e adicionar outros, como <code>latir()</code> ou <code>miar()</code>.
        </p>
      </section>

      <section>
        <h2>Exemplo em Java - Herança</h2>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Classe pai: define comportamentos comuns a todos os animais
public class Animal {
    public void comer() {
        System.out.println("O animal está comendo");
    }
}

// Classe filha: herda atributos e métodos da classe Animal
public class Cachorro extends Animal {
    // Método específico da classe Cachorro
    public void latir() {
        System.out.println("O cachorro está latindo");
    }
}

// Testando
Cachorro dog = new Cachorro();
dog.comer(); // Herdado da classe Animal
dog.latir(); // Método específico da classe Cachorro`}
        </SyntaxHighlighter>
        <p>
          ✅ Observação: a classe <code>Cachorro</code> não precisou reescrever o método <code>comer()</code> porque já o herdou da classe <code>Animal</code>.
        </p>
      </section>

      <section>
        <h2>Polimorfismo</h2>
        <p>
          O <strong>polimorfismo</strong> permite que objetos de diferentes classes respondam de maneira própria a um mesmo método. Em outras palavras, um método com o mesmo nome pode ter comportamentos distintos dependendo do objeto que o chama.
        </p>
        <p>
          Existem dois tipos principais de polimorfismo em Java:
        </p>
        <ul>
          <li><strong>Polimorfismo de sobrecarga:</strong> múltiplos métodos com o mesmo nome, mas assinaturas diferentes dentro da mesma classe.</li>
          <li><strong>Polimorfismo de sobrescrita:</strong> redefinição de um método da classe pai na classe filha, permitindo que cada classe implemente o comportamento que faz sentido para ela.</li>
        </ul>
        <p>
          O polimorfismo facilita a <strong>extensibilidade e a reutilização de código</strong>, permitindo escrever métodos mais genéricos que funcionam para diferentes tipos de objetos.
        </p>
      </section>

      <section>
        <h2>Exemplo em Java - Polimorfismo</h2>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Classe pai
public class Animal {
    public void emitirSom() {
        System.out.println("Som genérico");
    }
}

// Classe filha Cachorro sobrescreve o método emitirSom
public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Au Au!");
    }
}

// Classe filha Gato sobrescreve o método emitirSom
public class Gato extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Miau!");
    }
}

// Testando polimorfismo
Animal a1 = new Cachorro();
Animal a2 = new Gato();

a1.emitirSom(); // Au Au!
a2.emitirSom(); // Miau!`}
        </SyntaxHighlighter>
        <p>
          ✅ Observação: embora <code>a1</code> e <code>a2</code> sejam do tipo <code>Animal</code>, eles exibem comportamentos diferentes ao chamar <code>emitirSom()</code>, demonstrando o polimorfismo.
        </p>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie uma classe <strong>Funcionario</strong> com atributos <em>nome</em> e <em>salario</em>. Depois crie uma classe <strong>Gerente</strong> que herda de Funcionario e adiciona atributo <em>departamento</em>.
          </li>
          <li>
            Crie uma classe <strong>FormaGeometrica</strong> com método <em>calcularArea()</em>. Depois crie classes <strong>Quadrado</strong> e <strong>Circulo</strong> que sobrescrevem o método para calcular a área correta.
          </li>
          <li>
            Explique com suas palavras o que é polimorfismo e dê exemplos do mundo real.
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
