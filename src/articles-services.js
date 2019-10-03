const ArticlesService = {
    getAllArticles(knex) {
        return knex.select('*').from('blogful_articles');
    },

    insertArticle(knex, newArticle) {
        return knex
        .insert(newArticle)
        .into('blogful_articles')
        .returning('*')
        .then((rows) => {
            return rows[0];
        });
    },
    getArtcilesById(knex, id) {
        return knex
        .from('flogful_articles')
        .select('*')
        .where('id', id)
        .first();
    },

    deleteArticlelById(knex, id) {
        return knex('blogful_articles')
        .where({ id })
        .delete();
    },

    updateArticleById(knex, id, newArticleFields) {
        return knex('blogful_articles')
        .where({ id })
        .update(newArticleFields);
    },
}

module.exports = ArticleServices;