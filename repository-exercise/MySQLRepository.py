class MySQLRepository(Repository):
    def update(self, entity, **kwargs):
        "Sobrescreve o método update da interface, implementando a atualização"
        self._validate_attributes(entity, **kwargs) "aqui ele deve estar pegando esse método da classe Repository"
        entity.update().where(id=entity.id).values(**kwargs)
