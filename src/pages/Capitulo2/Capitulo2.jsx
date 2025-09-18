import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo2.css";

function Capitulo2() {
    const questions = [
        {
            question: "O que é um construtor em Java?",
            options: [
                "Um método especial chamado automaticamente ao criar o objeto",
                "Um atributo da classe",
                "Um método comum que precisa ser chamado manualmente"
            ],
            correct: "Um método especial chamado automaticamente ao criar o objeto"
        },
        {
            question: "Qual é a principal utilidade de um construtor?",
            options: [
                "Permitir criar objetos sem precisar de atributos",
                "Inicializar os atributos da classe de forma automática",
                "Deletar objetos da memória"
            ],
            correct: "Inicializar os atributos da classe de forma automática"
        },
        {
            question: "Se nenhuma versão de construtor for criada, o Java:",
            options: [
                "Impede a criação de objetos",
                "Cria automaticamente um construtor padrão sem parâmetros",
                "Cria um construtor com parâmetros obrigatórios"
            ],
            correct: "Cria automaticamente um construtor padrão sem parâmetros"
        },
        {
            question: "Qual das opções cria corretamente um construtor da classe Carro?",
            options: [
                "public void Carro(String modelo) { this.modelo = modelo; }",
                "public Carro(String modelo) { this.modelo = modelo; }",
                "void Carro(String modelo) { this.modelo = modelo; }"
            ],
            correct: "public Carro(String modelo) { this.modelo = modelo; }"
        }
    ];

    return (
        <div className="page capitulo2">
            <h1>Capítulo 2: Construtores e Sobrecarga de Métodos</h1>

            <section>
                <h2>Construtores</h2>
                <p>
                    Um <strong>construtor</strong> é um método especial usado para inicializar objetos.
                    Ele sempre tem o mesmo nome da classe e não possui tipo de retorno.
                </p>
                <p>
                    Quando criamos um objeto com <code>new</code>, o construtor é chamado automaticamente.
                </p>

                <h3>Exemplo em Java - Pessoa com Construtor</h3>
                <SyntaxHighlighter language="java" style={okaidia}>
                    {`public class Pessoa {
    private String nome;
    private int idade;

    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void apresentar() {
        System.out.println("Sou " + nome + " e tenho " + idade + " anos.");
    }
}

// Criando objetos
Pessoa maria = new Pessoa("Maria", 20);
Pessoa pedro = new Pessoa("Pedro", 30);

maria.apresentar(); // Saída: Sou Maria e tenho 20 anos.
pedro.apresentar(); // Saída: Sou Pedro e tenho 30 anos.`}
                </SyntaxHighlighter>
            </section>

            <section>
                <h2>Sobrecarga de Métodos</h2>
                <p>
                    <strong>Sobrecarga</strong> acontece quando criamos vários métodos com o mesmo nome,
                    mas assinaturas diferentes (parâmetros diferentes).
                </p>
                <p>
                    Isso deixa o código mais flexível e fácil de ler.
                </p>

                <h3>Exemplo em Java - Calculadora</h3>
                <SyntaxHighlighter language="java" style={okaidia}>
                    {`public class Calculadora {
    // Método para somar dois números inteiros
    public int somar(int a, int b) {
        return a + b;
    }

    // Sobrecarga: método para somar três números inteiros
    public int somar(int a, int b, int c) {
        return a + b + c;
    }

    // Sobrecarga: método para somar dois números decimais
    public double somar(double a, double b) {
        return a + b;
    }
}

// Testando
Calculadora calc = new Calculadora();
System.out.println(calc.somar(2, 3));       // 5
System.out.println(calc.somar(2, 3, 4));    // 9
System.out.println(calc.somar(2.5, 3.7));   // 6.2`}
                </SyntaxHighlighter>
            </section>

            <section>
                <h2>Exercícios para praticar</h2>
                <ol>
                    <li>
                        Crie uma classe <strong>Produto</strong> com os atributos <em>nome</em> e <em>preço</em>.
                        Adicione um construtor para inicializar os valores e um método para exibir as informações.
                    </li>
                    <li>
                        Crie uma classe <strong>Calculadora</strong> que tenha métodos sobrecarregados para calcular a área de:
                        <em>quadrado</em>, <em>retângulo</em> e <em>círculo</em>.
                    </li>
                    <li>
                        Crie uma classe <strong>Aluno</strong> que possa ser criada de duas formas:
                        apenas com <em>nome</em>, ou com <em>nome</em> e <em>nota</em>.
                    </li>
                    <li>
                        Explique, com suas próprias palavras, o que é <strong>sobrecarga de métodos</strong>.
                    </li>
                </ol>

                <p className="note">
                    ⚡ Dica: pratique criando os exemplos no IntelliJ IDEA. Tente variar os valores para ver como
                    os construtores e métodos sobrecarregados funcionam.
                </p>
            </section>

            <section>
                <h2>Quiz - Teste seus conhecimentos</h2>
                <Quiz questions={questions} />
            </section>
        </div>
    );
}

export default Capitulo2;
