class User:
    def update(self, **kwargs):
        """Atualiza uma pessoa usuária no repositório do MySQL.

        No cliente é possível chamar o método update do MySQLRepository,
        mas não o validate_attributes. Isso acontece devido ao encapsulamento.
        """
        MySQLRepository.update(self, **kwargs)
