import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo5.css";

function Capitulo5() {
  const questions = [
    {
      question: "Qual das alternativas define melhor uma classe abstrata?",
      options: [
        "Uma classe que só tem atributos",
        "Uma classe que não pode ser instanciada e serve como modelo",
        "Uma classe que tem apenas métodos públicos",
        "Uma classe usada apenas com interfaces"
      ],
      correct: "Uma classe que não pode ser instanciada e serve como modelo"
    },
    {
      question: "O que uma interface define?",
      options: [
        "A implementação de métodos",
        "Um contrato com métodos sem corpo",
        "Uma classe que herda outra",
        "Um conjunto de atributos obrigatórios"
      ],
      correct: "Um contrato com métodos sem corpo"
    },
    {
      question: "Qual palavra-chave é usada para implementar uma interface?",
      options: ["extends", "inherits", "implements", "abstract"],
      correct: "implements"
    },
    {
      question: "O polimorfismo permite:",
      options: [
        "Criar várias interfaces ao mesmo tempo",
        "Usar o mesmo método com comportamentos diferentes",
        "Executar vários métodos ao mesmo tempo",
        "Repetir código sem erro"
      ],
      correct: "Usar o mesmo método com comportamentos diferentes"
    },
    {
      question: "O que acontece se uma classe não implementar todos os métodos da interface?",
      options: [
        "Nada, é opcional",
        "O programa executa, mas mostra aviso",
        "Dá erro de compilação",
        "É convertido automaticamente em classe abstrata"
      ],
      correct: "Dá erro de compilação"
    }
  ];

  return (
    <div className="page capitulo5">
      <h1>Capítulo 5: Classes Abstratas, Interfaces e Polimorfismo Aplicado</h1>

      <section>
        <h2>Classes Abstratas</h2>
        <p>
          Uma <strong>classe abstrata</strong> é um modelo para outras classes, que não pode ser instanciada diretamente. Ela pode conter <strong>atributos e métodos comuns</strong> a todas as classes que a herdam, assim como <strong>métodos abstratos</strong> que obrigam as classes filhas a implementarem seus próprios comportamentos.
        </p>
        <p>
          O principal objetivo das classes abstratas é permitir <strong>reutilização de código</strong> e definir uma estrutura que garanta que certas funcionalidades sejam implementadas nas subclasses.
        </p>

        <h3>Exemplo em Java - Classe Abstrata</h3>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Classe abstrata: não pode ser instanciada
abstract class Animal {
    String nome;

    // Método concreto, com implementação
    void dormir() {
        System.out.println(nome + " está dormindo...");
    }

    // Método abstrato: deve ser implementado nas subclasses
    abstract void emitirSom();
}

// Subclasse Cachorro implementa o método abstrato
class Cachorro extends Animal {
    @Override
    void emitirSom() {
        System.out.println("Au au!");
    }
}

// Subclasse Gato implementa o método abstrato
class Gato extends Animal {
    @Override
    void emitirSom() {
        System.out.println("Miau!");
    }
}

// Testando
Cachorro c = new Cachorro();
c.nome = "Rex";
c.emitirSom(); // Au au!
c.dormir();    // Rex está dormindo...

Gato g = new Gato();
g.nome = "Mimi";
g.emitirSom(); // Miau!`}
        </SyntaxHighlighter>
        <p>
          ✅ Observação: métodos concretos da classe abstrata podem ser usados diretamente pelas subclasses, enquanto métodos abstratos devem obrigatoriamente ser implementados.
        </p>
      </section>

      <section>
        <h2>Interfaces</h2>
        <p>
          Uma <strong>interface</strong> define um <strong>contrato</strong> que uma classe deve seguir. Ela declara métodos sem implementação, ou seja, apenas suas assinaturas. As classes que implementam a interface precisam fornecer a implementação de todos os métodos definidos.
        </p>
        <p>
          Interfaces são úteis para criar <strong>comportamentos comuns</strong> entre classes que não compartilham herança direta e permitem que o mesmo método seja usado de forma genérica, apoiando o polimorfismo.
        </p>

        <h3>Exemplo em Java - Interface</h3>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Interface: define métodos que devem ser implementados
interface Veiculo {
    void acelerar();
    void frear();
}

// Classe Carro implementa a interface Veiculo
class Carro implements Veiculo {
    @Override
    public void acelerar() {
        System.out.println("O carro está acelerando!");
    }
    @Override
    public void frear() {
        System.out.println("O carro está freando!");
    }
}

// Classe Moto implementa a interface Veiculo
class Moto implements Veiculo {
    @Override
    public void acelerar() {
        System.out.println("A moto está acelerando!");
    }
    @Override
    public void frear() {
        System.out.println("A moto está freando!");
    }
}

// Testando
Veiculo carro = new Carro();
Veiculo moto = new Moto();
carro.acelerar(); // O carro está acelerando!
moto.frear();     // A moto está freando!`}
        </SyntaxHighlighter>
        <p>
          ✅ Observação: mesmo sendo de tipos diferentes, ambos os objetos podem ser tratados como <code>Veiculo</code>, permitindo código mais genérico e flexível.
        </p>
      </section>

      <section>
        <h2>Polimorfismo Aplicado</h2>
        <p>
          O <strong>polimorfismo</strong> permite que referências genéricas apontem para objetos de diferentes classes, possibilitando que o mesmo método se comporte de forma diferente dependendo do objeto. Isso aumenta a flexibilidade e a reutilização do código.
        </p>

        <SyntaxHighlighter language="java" style={okaidia}>
          {`Veiculo v1 = new Carro();
Veiculo v2 = new Moto();

v1.acelerar(); // O carro está acelerando!
v2.acelerar(); // A moto está acelerando!`}
        </SyntaxHighlighter>
        <p>
          ✅ Observação: esse é um exemplo de polimorfismo de sobrescrita usando interfaces. Apesar de ambos serem do tipo <code>Veiculo</code>, cada classe implementa o método <code>acelerar()</code> de forma específica.
        </p>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie uma classe abstrata <strong>Funcionario</strong> com atributos <em>nome</em> e <em>salario</em> e método abstrato <em>calcularBonus()</em>. Crie duas classes filhas <strong>Gerente</strong> e <strong>Atendente</strong> implementando o método com bônus diferentes.
          </li>
          <li>
            Crie uma interface <strong>ControleRemoto</strong> com métodos <em>ligar(), desligar(), aumentarVolume()</em>. Implemente na classe <strong>Televisao</strong>.
          </li>
          <li>
            Crie uma classe abstrata <strong>Personagem</strong> com método <em>atacar()</em>. Crie <strong>Mago</strong>, <strong>Guerreiro</strong> e <strong>Arqueiro</strong> implementando o método de forma diferente. Teste polimorfismo.
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

export default Capitulo5;
