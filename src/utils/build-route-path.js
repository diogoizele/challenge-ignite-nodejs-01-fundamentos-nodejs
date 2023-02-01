/**
 * A função constrói uma expressão regular que corresponde a uma rota em uma URL
 *
 * A função `buildRoutePath()` recebe um argumento `path` que é uma string que representa uma rota.
 *
 */
export function buildRoutePath(path) {
  /**
   * A primeira expressão regular `routeParameterRegex` procura por parâmetros na rota,
   * identificados pelo símbolo ":".
   *
   * Essa expressão regular usa o padrão "([a-zA-Z]+)" onde o colchete define
   * um conjunto de caracteres permitidos (letras maiúsculas e minúsculas) e
   * símbolo "+" significa que há ocorrência de pelo menos uma letra.
   */
  const routeParameterRegex = /:([a-zA-Z]+)/g;

  /**
   * A variável `pathWithParams` utiliza o método `replaceAll()` para
   * substituir cada parâmetro na rota pelo padrão "(?<$1>[a-z0-9--_]+)"
   * que representa uma captura nomeada.
   *
   * A captura nomeada é identificada pelo símbolo "?" seguido de "<" e ">",
   * e seu nome é definido pelo primeiro grupo de captura na expressão
   * regular `routeParameterRegex", ou seja, "$1". O conjunto de caracteres
   * permitidos dentro da captura é "a-z0-9--_", ou seja, letras minúsculas,
   * números, traços e sublinhados
   */
  const pathWithParams = path.replaceAll(
    routeParameterRegex,
    "(?<$1>[a-z0-9\--_]+)"
  );

  /**
   * Finalmente a função retorna uma nova expressão regular usando o método
   * constructor RegExp(). O padrão é construído usando o template literal:
   *
   * \``^${pathWithParams}(?<query>\\?(.*))?$\`\`, onde "^" é um marcador
   * que indica o início da string "$" é um marcador que indica o fim da
   * string, e "?" significa um símbolo "?" literal, enquanto que "(.*)"
   * significa uma caputra não nomeada que corresponde a qualquer caractere
   * zero ou mais vezes.
   */
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
