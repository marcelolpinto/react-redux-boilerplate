import BaseModel from "../../BaseModel";
import { Entity } from "./Entity.model";

export class Entities extends BaseModel {
  constructor(entities) {
    super();
    this.original = entities;

    this.all = entities.map(entity => new Entity(entity));
  }

  add(newEntity) {
		return this.baseAdd(newEntity, this.original, Entities);
	}

	update(entityId, updatedEntity) {
		return this.baseUpdate(entityId, this.original, Entities, updatedEntity);
	}

	remove(entityId) {
		return this.baseRemove(entityId, this.original, Entities);
	}

	getById(entityId) {
		return this.baseGetById(entityId, this.all, 'id');
  }
  
  getOriginalById(entityId) {
    return this.baseGetById(entityId, this.original)
  }
}