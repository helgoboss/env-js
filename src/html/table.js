
/**
 * HTMLTableElement - DOM Level 2
 * Implementation Provided by Steven Wood
 *
 * HTML5: 4.9.1 The table element
 * http://dev.w3.org/html5/spec/Overview.html#the-table-element
 */
 
(function(){
    
var log = Envjs.logger();

Envjs.once('tick', function(){
    log = Envjs.logger('Envjs.HTML.HTMLTableElement').
		debug('HTMLTableElement available');    
});

exports.HTMLTableElement = HTMLTableElement = function(ownerDocument) {
    HTMLElement.apply(this, arguments);
};
HTMLTableElement.prototype = new HTMLElement();
__extend__(HTMLTableElement.prototype, {

    get tFoot() {
        //tFoot returns the table footer.
        return this.getElementsByTagName("tfoot")[0];
    },

    createTFoot : function () {
        var tFoot = this.tFoot;

        if (!tFoot) {
            tFoot = document.createElement("tfoot");
            this.appendChild(tFoot);
        }

        return tFoot;
    },

    deleteTFoot : function () {
        var foot = this.tFoot;
        if (foot) {
            foot.parentNode.removeChild(foot);
        }
    },

    get tHead() {
        //tHead returns the table head.
        return this.getElementsByTagName("thead")[0];
    },

    createTHead : function () {
        var tHead = this.tHead;

        if (!tHead) {
            tHead = document.createElement("thead");
            this.insertBefore(tHead, this.firstChild);
        }

        return tHead;
    },

    deleteTHead : function () {
        var head = this.tHead;
        if (head) {
            head.parentNode.removeChild(head);
        }
    },

    /*appendChild : function (child) {

      var tagName;
      if(child&&child.nodeType==Node.ELEMENT_NODE){
      tagName = child.tagName.toLowerCase();
      if (tagName === "tr") {
      // need an implcit <tbody> to contain this...
      if (!this.currentBody) {
      this.currentBody = document.createElement("tbody");

      Node.prototype.appendChild.apply(this, [this.currentBody]);
      }

      return this.currentBody.appendChild(child);

      } else if (tagName === "tbody" || tagName === "tfoot" && this.currentBody) {
      this.currentBody = child;
      return Node.prototype.appendChild.apply(this, arguments);

      } else {
      return Node.prototype.appendChild.apply(this, arguments);
      }
      }else{
      //tables can still have text node from white space
      return Node.prototype.appendChild.apply(this, arguments);
      }
      },*/

    get tBodies() {
        return new HTMLCollection(this.getElementsByTagName("tbody"));

    },

    get rows() {
        return new HTMLCollection(this.getElementsByTagName("tr"));
    },

    insertRow : function (idx) {
        if (idx === undefined) {
            throw new Error("Index omitted in call to HTMLTableElement.insertRow ");
        }

        var rows = this.rows,
            numRows = rows.length,
            node,
            inserted,
            lastRow;

        if (idx > numRows) {
            throw new Error("Index > rows.length in call to HTMLTableElement.insertRow");
        }

        inserted = document.createElement("tr");
        // If index is -1 or equal to the number of rows,
        // the row is appended as the last row. If index is omitted
        // or greater than the number of rows, an error will result
        if (idx === -1 || idx === numRows) {
            this.appendChild(inserted);
        } else {
            rows[idx].parentNode.insertBefore(inserted, rows[idx]);
        }

        return inserted;
    },

    deleteRow : function (idx) {
        var elem = this.rows[idx];
        elem.parentNode.removeChild(elem);
    },

    get summary() {
        return this.getAttribute("summary");
    },

    set summary(summary) {
        this.setAttribute("summary", summary);
    },

    get align() {
        return this.getAttribute("align");
    },

    set align(align) {
        this.setAttribute("align", align);
    },

    get bgColor() {
        return this.getAttribute("bgColor");
    },

    set bgColor(bgColor) {
        return this.setAttribute("bgColor", bgColor);
    },

    get cellPadding() {
        return this.getAttribute("cellPadding");
    },

    set cellPadding(cellPadding) {
        return this.setAttribute("cellPadding", cellPadding);
    },

    get cellSpacing() {
        return this.getAttribute("cellSpacing");
    },

    set cellSpacing(cellSpacing) {
        this.setAttribute("cellSpacing", cellSpacing);
    },

    get frame() {
        return this.getAttribute("frame");
    },

    set frame(frame) {
        this.setAttribute("frame", frame);
    },

    get rules() {
        return this.getAttribute("rules");
    },

    set rules(rules) {
        this.setAttribute("rules", rules);
    },

    get width() {
        return this.getAttribute("width");
    },

    set width(width) {
        this.setAttribute("width", width);
    },
    toString: function() {
        return '[object HTMLTableElement]';
    }
});

}(/*HTMLTableElement*/));
