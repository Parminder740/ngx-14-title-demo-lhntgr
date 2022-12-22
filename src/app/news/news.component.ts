import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  codeMirrorOptions: any = {
    mode: 'text/x-mysql',
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };
  query: any;
  constructor() {}

  ngOnInit() {
    this.query = `-- SQL Mode for CodeMirror`;
    console.log(this.query);
  }
  setEditorContent(event) {
    console.log(event);
  }
}
