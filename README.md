# Site Engenhe Jr

<p>A estrutura do site está quase que totalmente pronta.</p>
<p>Poucas mudanças ainda serão realizadas.</p>

## Pendencias:
<ul>
    <li>Email (Implementado, mas sujeito a mudanças)</li>
    <li>Algumas alterações em determinados serviços</li>
    <li>Finalizar Portfólio</li>
</ul>

### Folha de estilos
<code>/css/style.css</code>

### Scripts do site
<code>/js/scripts.js</code>

### Sobre a implementação do envio de Email

- O arquivo `/mail/contact_me.php` contém o script de envio de emails, ele não deve ser posto no servidor do Github pois irá deixar exposto a senha e email utilizado no processo. Utilizaremos aqui, um servidor smtp grande do mercado.

- Para o servidor PHP é necessário subir os arquivos dos diretórios (esses arquivos são dispensáveis no Github):
  - `/vendor/composer/`
  - `/vendor/phpmailer/`
  - `/vendor/autoload.php`
  - `/mail/contact_me.php`

- O código Javascript encontra-se em: `/js/scripts.js`

- Sugiro a criação de um email no [Outlook](https://outlook.live.com/) para o **envio** dos emails, pois o serviço do gmail é bastante burocrático no quesito segurança. Normalmente os emails recebidos irão parar na caixa de *spam*, contudo marca-lo como não *spam* resolve o problema.

- A configuração de conta de email e senha para o envio encontra-se no arquivo `/mail/contact_me.php`.
