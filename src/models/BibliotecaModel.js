export default class BibliotecaModel {
    static #apis = [
        {
            url: 'https://ratsjs.onrender.com/api/livros',
            key: process.env.API_KEY_GRUPO1,
        },
        {
            url: 'https://olhosdagua.onrender.com/api/livro',
            key: process.env.API_KEY_GRUPO2,
        },
        {
            url: 'https://clubelivro-backend.onrender.com/api/livros',
            key: process.env.API_KEY_GRUPO3,
        },
    ];

    static async buscarTodos() {
        const resultados = await Promise.allSettled(
            this.#apis.map(({ url, key }) =>
                fetch(url, {
                    headers: {
                        'x-api-key': key,
                    },
                }).then((res) => res.json()),
            ),
        );

        const livros = resultados
            .filter((r) => r.status === 'fulfilled')
            .flatMap((r) => r.value);

        return livros.map((livro, index) => ({
            ...livro,
            id: index + 1,
        }));
    }

    static async buscarPorId(id) {
        const todos = await this.buscarTodos();

        return todos.find((livro) => livro.id === Number(id)) ?? null;
    }
}