import "./index.css";
import textStyleHandler from "./handler";
import keyClassRelation from "./keyClassRelation";

(function () {
  for (let i = 0; i < keyClassRelation.length; i++) {
    const relObj = keyClassRelation[i];
    textStyleHandler(relObj.key, relObj.class);
  }
})();
