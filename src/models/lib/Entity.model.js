export class Entity {
  constructor(entity) {
    this.original = entity;

    this.id = entity._id;
    this.name = entity.name;
    this.age = entity.age;
    this.favoriteColor = entity.favorite_color;

    this.nameAndAge = this.getNameAndAge(entity);
  }

  getNameAndAge(entity) {
    return entity.name + ', ' + entity.age;
  }
}