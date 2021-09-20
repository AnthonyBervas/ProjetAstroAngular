export class Position {
  _id: number;
  _idTimeStep: number;
  _idCorpsCeleste: number;
  _x: number;
  _y: number;

  constructor(
    id: number,
    idTimeStep: number,
    idCorpsCeleste: number,
    x: number,
    y: number
  ) {
    this._id = id;
    this._idTimeStep = idTimeStep;
    this._idCorpsCeleste = idCorpsCeleste;
    this._x = x;
    this._y = y;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get idTimeStep(): number {
    return this._idTimeStep;
  }

  public set idTimeStep(value: number) {
    this._idTimeStep = value;
  }

  public get idCorpsCeleste(): number {
    return this._idCorpsCeleste;
  }

  public set idCorpsCeleste(value: number) {
    this._idCorpsCeleste = value;
  }

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }
}
