/*!
 * JAVASCRIPT
 */

var gridpak = {

    $container: {},

    /**
     * DOM element to append the Gridpak too
     *
     */
    append: 'body',

    css: '',

    /**
     * Insert jQuery if it's not already there
     *
     * Checks for jQuery and includes it from Google CDN if not
     *
     */
    bootstrap: function() {
        var jquerySrc = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js',
            script = {},
            that = this;

        // Have they brought a knife to gunfight?
        if (typeof(window.jQuery) == 'undefined') {
            script = document.createElement('script');
            script.src= jquerySrc;
            // Insert it right after the opening body tag
            document.body.insertBefore(script, document.body.firstChild);
            setTimeout('gridpak.init()', 500);
        } else {
            $(function() { that.init(); });
        }
    },

    /**
     * Make our cols and set up resizing functions
     */
    init: function() {
        var gridOn = false,
            grids = [
                {
                    col_num: 4,
                    min_width: 0,
                    upper: 374
                },
                {
                    col_num: 4,
                    min_width: 375,
                    upper: 600
                },
                {
                    col_num: 8,
                    min_width: 600,
                    upper: 768
                },
                {
                    col_num: 8,
                    min_width: 768,
                    upper: 840
                },
                {
                    col_num: 8,
                    min_width: 840,
                    upper: 1024
                },
                {
                    col_num: 8,
                    min_width: 1024,
                    upper: 1366
                },
                {
                    col_num: 10,
                    min_width: 1366
                }
            ],
            numGrids = grids.length - 1,
            i = 0,
            markup = '';

        markup = '<div id="gridpak" />';

        this.css += '<style type="text/css"> ' +
            '#gridpak { ' +
                'width:100%; ' +
                'height:100%; ' +
                'display:block; ' +
                'position:absolute; ' +
                'top:0; ' +
                'left:0; ' +
            '} ' +
            '#gridpak .gridpak_grid { ' +
                'height:100%; ' +
                'display:none; ' +
            '} ' +
            '#gridpak .gridpak_col { ' +
                'border-left:0 solid rgba(255,255,255,0); ' +
                'border-right:0 solid rgba(255,255,255,0); ' +
                '-moz-background-clip: padding; -webkit-background-clip: padding-box; background-clip: padding-box;' +
                '-webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; ' +
                'display:block; ' +
                'float:left; ' +
                'height:100%; ' +

            '} ' +
            '#gridpak .gridpak_row { ' +
                'height:100%; ' +

            '} ' +
            '#gridpak .gridpak_visible { ' +
                'width:100%; ' +
                'height:100%; ' +
                'display:block; ' +
                'background-color:rgba(153,0,0,0.2); ' +
            '} ';

        this.$container = $(markup);

        // Put the grids on the screen
        for (i; i<=numGrids; i++) {
            gridpak.drawGrid(grids[i], i);

        }

        this.css += '</style>';
        $(this.append).prepend(this.css);

        this.toggleGrid();

        $(this.append).append(gridpak.$container);

     },

     /**
      * Draw grid
      *
      * Draws a single grid, usually called from a loop
      */
     drawGrid: function(grid, num) {
        var markup = '';

        markup = '<div class="container gridpak_grid gridpak_grid_' + num + '"><div class="row gridpak_row">';

        this.css += '@media screen and (min-width: ' + grid.min_width + 'px) ';
        if (grid.upper != false) this.css += 'and (max-width: ' + grid.upper + 'px) ';
        this.css += ' { ' +
            '#gridpak .gridpak_grid_' + num + ' { ' +
                'display: block; ' +
            '} ' +
        '} ';

        for(var i = 0; i<=grid.col_num; i++) {
            markup += '<div class="gridpak_col col-1"><div class="gridpak_visible"></div></div> <!-- // .gridpak_col -->';
        }

        markup += '</div></div><!-- // .gridpak_grid -->';

        gridpak.$container.append(markup);

     },

     /**
      * Toggles the grids visibility with a keypress
      */
     toggleGrid: function() {
        var that = this;

        $(document).keyup(function(e) {
            if (e.keyCode == 71) {
                that.$container.toggle();
            }
        });
     },

 }


// Kick it off!
gridpak.bootstrap();
