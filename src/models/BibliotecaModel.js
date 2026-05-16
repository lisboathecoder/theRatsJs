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
<<<<<<< HEAD
=======
        {
            url: 'https://clubelivro-backend.onrender.com/api/livros',
            key: process.env.API_KEY_GRUPO3,
        },
>>>>>>> b9408e3f3b1cb97904da1346a11c5cc6cdd4cfd3
    ];

    static async buscarTodos() {
        const resultados = await Promise.allSettled(
            this.#apis.map(({ url, key }) =>
                fetch(url, {
                    headers: {
                        'x-api-key': key,
                    },
<<<<<<< HEAD
                }).then(res => res.json())
            )
        );

        return resultados
            .filter(r => r.status === 'fulfilled')
            .flatMap(r => r.value);
=======
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
>>>>>>> b9408e3f3b1cb97904da1346a11c5cc6cdd4cfd3
    }

    static async buscarPorId(id) {
        const todos = await this.buscarTodos();
<<<<<<< HEAD
        return todos.find(livro => livro.id === id) ?? null;
=======

        return todos.find((livro) => livro.id === Number(id)) ?? null;
>>>>>>> b9408e3f3b1cb97904da1346a11c5cc6cdd4cfd3
    }
}