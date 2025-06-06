class AdicionalRepository {
  constructor(model) {
    this.model = model;
  }

  findAll() {
    return this.model.findAll({ include: ['produto'] });
  }

  findById(id) {
    return this.model.findByPk(id, { include: ['produto'] });
  }

  create(data) {
    return this.model.create(data);
  }

  update(id, data) {
    return this.model.update(data, { where: { id } });
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = AdicionalRepository;
