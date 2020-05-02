import Component from '@ember/component';
import svgToDataUrl from 'svg-to-dataurl';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';


export default Component.extend({
  tinyData: service(),
  tagName: 'tr',
  classNames: ['select-none'],
  classNameBindings: ['dragOn:border-red-500', 'dragOn:border-dashed', 'dropzone'],
  dragOn: computed('dropTarget', 'req', function () {
    return this.dropTarget === this.req;
  }),
  req: computed('requirement', function () {
    const { requirement } = this;
    if (requirement.attributes) return requirement;

    return this.tinyData.get('graduationPlanRequirement', requirement.id);
  }),
  didInsertElement() {
    const {
      req,
    } = this;
    const svg = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
        <rect width="200" height="20" fill="#eeeeee"></rect>
        <text font-family="sans" y="-0.7999992370605469" x="10" font-size="12" font-weight="300" family="sans" size="12" weight="300">
          <tspan dy="15.600000000000001" x="10">
            ${req.attributes.name}
          </tspan>
        </text>
      </svg>
    `;

    const url = svgToDataUrl(svg);
    this.dragImage = new Image(200, 20);
    this.dragImage.src = url;
  },

  drop(event) {
    const { req: target } = this;

    event.preventDefault();

    this.set('dragOn', null);

    const item = this.tinyData.get('graduationPlanRequirement', event.dataTransfer.getData('text'));

    if (this.canDrop(target, item)) {
      this.onDrop(target, item);
    }
  },

  // Must prevent default to enable drop event
  dragOver(event) {
    event.preventDefault();
  },

  dragEnter(event) {
    event.preventDefault();
    this.setDrop(this.req);
  },

  dragStart(event) {
    const {
      id,
    } = this.req;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text', id);
    event.dataTransfer.setDragImage(this.dragImage, 0, 0);
  },

  canDrop(dest, source) {
    const sourceParentId = get(source, 'relationships.parent.data.id');
    const destParentId = get(dest, 'relationships.parent.data.id');

    return source.attributes.requirementType === dest.attributes.requirementType
      && sourceParentId === destParentId
      && source.id !== dest.id;
  },
});
