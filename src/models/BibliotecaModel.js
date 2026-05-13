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
    ];

    static async buscarTodos() {
        const resultados = await Promise.allSettled(
            this.#apis.map(({ url, key }) =>
                fetch(url, {
                    headers: {
                        'x-api-key': key,
                    },
                }).then(res => res.json())
            )
        );

        return resultados
            .filter(r => r.status === 'fulfilled')
            .flatMap(r => r.value);
    }

    static async buscarPorId(id) {
        const todos = await this.buscarTodos();
        return todos.find(livro => livro.id === id) ?? null;
    }
}