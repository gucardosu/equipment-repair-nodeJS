CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE equipamentos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id) ON DELETE CASCADE,
    tipo VARCHAR(50) NOT NULL, -- ex: Notebook, Desktop, Impressora
    marca VARCHAR(50),
    modelo VARCHAR(50),
    numero_serie VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ordens_servico (
    id SERIAL PRIMARY KEY,
    equipamento_id INTEGER REFERENCES equipamentos(id) ON DELETE CASCADE,
    descricao_problema TEXT NOT NULL,
    notas_tecnicas TEXT,
    status VARCHAR(50) DEFAULT 'Pendente',
    valor DECIMAL(10, 2),
    data_entrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_conclusao TIMESTAMP
);