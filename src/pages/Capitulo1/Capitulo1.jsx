import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
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
          A <strong>Programação Procedural</strong> organiza o código em funções e procedimentos que são executados em sequência. Cada função realiza uma ação específica, e o foco está principalmente no fluxo do programa, ou seja, na ordem em que as instruções são executadas.
        </p>
        <p>
          Exemplo: em um sistema de cadastro de clientes, você teria funções separadas para criar, atualizar e deletar clientes. Cada função manipula diretamente os dados, e a lógica de cada operação está espalhada pelo código.
        </p>
        <p>
          Já na <strong>Programação Orientada a Objetos (POO)</strong>, o foco principal está nos <strong>objetos</strong>, que representam entidades do mundo real ou conceitos abstratos. Cada objeto combina <strong>atributos</strong> (dados) e <strong>métodos</strong> (ações), encapsulando informações e comportamentos de forma organizada.
        </p>
        <p>
          Exemplo: no mesmo sistema de cadastro de clientes, você criaria uma classe <em>Cliente</em> que define os atributos (como nome, idade e email) e métodos (como cadastrar, atualizar e deletar). Cada cliente específico do sistema é então uma instância dessa classe, possuindo seus próprios dados e podendo executar ações definidas na classe.
        </p>
      </section>
      
      <section>
        <h2>O que é POO?</h2>
        <p>
          A <strong>Programação Orientada a Objetos (POO)</strong> é um paradigma de programação que organiza o código em torno de objetos que possuem <strong>atributos</strong> (representando o estado) e <strong>métodos</strong> (representando o comportamento). Essa abordagem ajuda a criar sistemas mais modulados, reutilizáveis e fáceis de manter.
        </p>
        <p>
          Exemplo no mundo real: em um jogo de RPG, cada personagem é um objeto. Ele pode ter atributos como <em>nome</em>, <em>vida</em> e <em>força</em>, e métodos como <em>atacar()</em> e <em>defender()</em>. Essa organização permite tratar cada personagem de forma independente, mas usando a mesma estrutura definida pela classe.
        </p>
      </section>

      <section>
        <h2>Classe e Objeto</h2>
        <p>
          <strong>Classe</strong>: é o molde ou estrutura que define quais atributos e métodos os objetos de um determinado tipo terão. Pense na classe como uma receita ou planta arquitetônica que especifica os elementos essenciais que cada objeto terá.
        </p>
        <p>
          <strong>Objeto</strong>: é uma instância da classe, ou seja, uma ocorrência concreta do molde definido. Cada objeto possui seus próprios valores para os atributos definidos na classe e pode executar os métodos que a classe disponibiliza.
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
    // Atributos do carro que representam seu estado
    String modelo;
    int velocidade;

    // Método para acelerar o carro
    public void acelerar(int incremento) {
        // Aumenta a velocidade atual em "incremento"
        velocidade += incremento;
        System.out.println(modelo + " agora está a " + velocidade + " km/h");
    }

    // Método para frear o carro
    public void frear(int decremento) {
        // Diminui a velocidade atual em "decremento"
        velocidade -= decremento;
        if (velocidade < 0) {
            velocidade = 0; // Evita que a velocidade fique negativa
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

// Usando os métodos para alterar o estado dos carros
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
          Assim você pratica na prática e consolida o entendimento dos conceitos de classes, objetos e métodos.
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
