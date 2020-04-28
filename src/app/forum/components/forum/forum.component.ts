import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Forum} from '../../models/Forum';
import {concatMap} from 'rxjs/operators';
import {ForumService} from '../../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forum: Forum;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      concatMap(
        params => this.forumService.getForum(+params.get('id'))
      )
    ).subscribe(
      forum => this.forum = forum
    );
  }
}
