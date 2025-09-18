import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"; // 
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo1.css";

function Capitulo1() {
  const questions = [
    {
      question: "Uma classe define como os objetos serão.",
      options: ["Verdadeiro", "Falso"],
      correct: "Verdadeiro",
    },
    {
      question: "Um objeto é uma instância de uma classe.",
      options: ["Verdadeiro", "Falso"],
      correct: "Verdadeiro",
    },
    {
      question: "Qual desses é um método da classe Carro?",
      options: ["modelo", "acelerar()", "velocidade"],
      correct: "acelerar()",
    },
    {
      question: "Qual é a diferença entre classe e objeto?",
      options: [
        "Classe é o molde, objeto é a instância",
        "Classe é um objeto, objeto é um método",
        "Classe e objeto são a mesma coisa"
      ],
      correct: "Classe é o molde, objeto é a instância"
    }
  ];

  return (
    <div className="page capitulo1">
      <h1>Capítulo 1: Classes, Objetos e Métodos</h1>

      <section>
        <h2>Programação Procedural x Programação Orientada a Objetos</h2>
        <p>
          Na <strong>Programação Procedural</strong>, o código é organizado em funções e procedimentos que são chamados em sequência. O foco está nas ações e no fluxo do programa.
        </p>
        <p>
          Exemplo: em um sistema de cadastro de clientes, você teria funções separadas para criar cliente, atualizar cliente e deletar cliente. Cada função manipula os dados diretamente.
        </p>
        <p>
          Na <strong>Programação Orientada a Objetos (POO)</strong>, o foco está nos objetos, que combinam dados e comportamentos. Cada objeto representa algo do mundo real ou um conceito abstrato.
        </p>
        <p>
          Exemplo: no mesmo sistema de cadastro de clientes, você teria uma classe <em>Cliente</em> que define atributos (nome, idade, email) e métodos (cadastrar, atualizar, deletar). Cada cliente do sistema é uma instância dessa classe.
        </p>
      </section>
      
      <section>
        <h2>O que é POO?</h2>
        <p>
          A <strong>Programação Orientada a Objetos (POO)</strong> organiza o
          código em objetos que combinam <strong>atributos</strong> e{" "}
          <strong>métodos</strong>. Um objeto representa algo do mundo real ou
          um conceito abstrato.
        </p>
        <p>
          Exemplo do mundo real: em um jogo de RPG, cada personagem é um
          objeto, com atributos como <em>nome</em>, <em>vida</em>,{" "}
          <em>força</em> e métodos como <em>atacar()</em>, <em>defender()</em>.
        </p>
      </section>

      <section>
        <h2>Classe e Objeto</h2>
        <p>
          <strong>Classe</strong>: é o molde ou a planta do objeto. Define
          atributos e métodos.
        </p>
        <p>
          <strong>Objeto</strong>: é uma instância da classe. Cada objeto tem
          seus próprios valores para os atributos.
        </p>

        <h3>Exemplo em Java - Pessoa</h3>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`public class Pessoa {
    // Atributos da classe Pessoa
    String nome;
    int idade;

    // Método que apresenta os dados da pessoa
    public void apresentar() {
        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
    }
}

// Criando objetos da classe Pessoa
Pessoa ana = new Pessoa();
ana.nome = "Ana";
ana.idade = 25;

Pessoa joao = new Pessoa();
joao.nome = "João";
joao.idade = 28;

// Chamando o método apresentar() dos objetos
ana.apresentar();  // Olá, meu nome é Ana e tenho 25 anos.
joao.apresentar(); // Olá, meu nome é João e tenho 28 anos.`}
        </SyntaxHighlighter>

        <h3>Exemplo em Java - Carro</h3>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`public class Carro {
    // Atributos
    String modelo;
    int velocidade;

    // Método para acelerar o carro
    public void acelerar(int incremento) {
        velocidade += incremento; // Aumenta a velocidade
        System.out.println(modelo + " agora está a " + velocidade + " km/h");
    }

    // Método para frear o carro
    public void frear(int decremento) {
        velocidade -= decremento; // Diminui a velocidade
        if (velocidade < 0) {
            velocidade = 0; // Garante que a velocidade não fique negativa
        }
        System.out.println(modelo + " agora está a " + velocidade + " km/h");
    }
}

// Criando objetos da classe Carro
Carro fusca = new Carro();
fusca.modelo = "Fusca";
fusca.velocidade = 0;

Carro uno = new Carro();
uno.modelo = "Uno";
uno.velocidade = 0;

// Usando os métodos
fusca.acelerar(20); // Fusca agora está a 20 km/h
uno.acelerar(50);   // Uno agora está a 50 km/h
fusca.frear(10);    // Fusca agora está a 10 km/h
`}
        </SyntaxHighlighter>
      </section>

  <section>
  <h2>Exercícios para praticar</h2>
  <ol>
    <li>
      Crie uma classe <strong>Aluno</strong> com os atributos <em>nome</em> e <em>nota</em>.
      Depois, crie um método que exiba: <code>"O aluno X tirou nota Y"</code>.
    </li>
    <li>
      Crie uma classe <strong>ContaBancaria</strong> com os atributos <em>titular</em> e <em>saldo</em>.
      Adicione métodos para <em>depositar</em> e <em>sacar</em>.
      Teste criando 2 contas diferentes e executando operações.
    </li>
    <li>
      Crie uma classe <strong>Livro</strong> com os atributos <em>titulo</em>, <em>autor</em> e <em>numeroDePaginas</em>.
      Depois, crie um método que mostre no console as informações do livro.
    </li>
    <li>
      Explique, com suas próprias palavras, a diferença entre uma <strong>classe</strong> e um <strong>objeto</strong>.
    </li>
  </ol>

  <p className="note">
    ⚡ Dica: tente resolver esses exercícios no IntelliJ IDEA, criando um novo projeto em Java. 
    Assim você pratica de verdade e ganha confiança.
  </p>
</section>

      <section>
        <h2>Quiz - Teste seus conhecimentos</h2>
        <Quiz questions={questions} />
      </section>
    </div>
  );
}

export default Capitulo1;
