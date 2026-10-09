"use client";

import { useState } from "react";

export default function FormularioDeCandidatura({
  tituloDaVaga,
}: {
  tituloDaVaga: string;
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rascunho, setRascunho] = useState("");
  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [enviada, setEnviada] = useState(false);
  const emailParece = email.includes("@") && email.includes(".");
  const podeEnviar = nome.trim() !== "" && emailParece && habilidades.length > 0;

  function adicionar() {
    const nova = rascunho.trim();
    if (nova === "" || habilidades.includes(nova)) return;
    setHabilidades([...habilidades, nova]); 
    setRascunho("");
  }

  if (enviada) {
    return (
      <div className="ok">
        <h3>Candidatura registrada ✓</h3>
        <p>
          {nome}, guardamos a sua candidatura para <strong>{tituloDaVaga}</strong> com{" "}
          {habilidades.length} habilidade(s).
        </p>
        {/* Voltar significa desligar este estado: os outros quatro continuam lá. */}
        <button type="button" onClick={() => setEnviada(false)}>
          corrigir alguma coisa
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviada(true);
      }}
    >
      <label>
        Nome
        {/* value + onChange andam JUNTOS. Só o value prende o campo. */}
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>

      <label>
        E-mail
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {/* o aviso só aparece depois que a pessoa começou a digitar */}
      {email !== "" && !emailParece && <p className="erro">Isso não parece um e-mail.</p>}

      <label>
        Habilidades
        <input
          value={rascunho}
          onChange={(e) => setRascunho(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              adicionar();
            }
          }}
        />
      </label>
      <button type="button" onClick={adicionar}>
        adicionar
      </button>

      <ul className="chips">
        {habilidades.map((h) => (
          <li key={h}>
            {h}
            <button
              type="button"
              aria-label={`remover ${h}`}
              onClick={() => setHabilidades(habilidades.filter((x) => x !== h))}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {/* disabled sai de podeEnviar, que é conta. Não há useState de botão. */}
      <button type="submit" disabled={!podeEnviar}>
        Enviar candidatura
      </button>
    </form>
  );
}